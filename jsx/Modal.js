/**
 * This file contains React components for Modal component.
 *
 * @author Henri Rabalais
 * @version 1.1.0
 *
 */

/**
 * Modal Component.
 * React wrapper for a Modal Window. Allows to dynamically toggle a Modal window.
 *
 * ================================================
 * Usage:
 *
 * =================================================
 *
 */
class Modal extends React.Component {
  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    if (this.props.throwWarning) {
      console.log('not sure...');
      swal({
          title: "Are You Sure?",
          text: "Leaving the form will result in the loss of any information entered.",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: 'Proceed',
          cancelButtonText: 'Cancel',
        },
        () => {
          this.props.closeModal();
        });
    } else {
      this.props.closeModal();
    }
  }

  render() {
    // Black Background with Alpha Channel
    const backdropStyle = {
      position: 'fixed',
      zIndex: 9998,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // White Modal Window
    const modalStyle = {
      position: 'relative',
      maxWidth: 850,
      maxHeight: '100%',
      margin: '0 auto',
      backgroundColor: '#fff',
      borderRadius: 10,
      overflowY: 'auto',
      zIndex: 9999
    };

    const titleStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      background: '#093782',
      height: '70px',
      borderTopRightRadius: '10',
      color: '#FFFFFF',
      fontSize: 24,
      padding: 20,
    }

    const glyphStyle = {
      marginLeft: 'auto',
      cursor: 'pointer'
    }

    const bodyStyle = {
      padding: 15
    }

    let modal;
    if (this.props.show) {
      modal = (
        <div style={backdropStyle} onClick={this.closeModal}>
          <div style={modalStyle} onClick={e => {e.stopPropagation()}}>
            <div style={titleStyle}>
              {this.props.title}
              <span style={glyphStyle} onClick={this.closeModal}>
                ×
              </span>
            </div>
            <div style={bodyStyle}>
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {modal}
      </div>
    );
  }
}

Modal.propTypes = {
  title: React.PropTypes.string,
  show: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func.isRequired,
  throwWarning: React.PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  throwWarning: true,
};

export default Modal;
