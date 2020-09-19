export const variantsImg = {
  zoomedIn: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    maxWidth: '100%',
    maxHeight: '100%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2'
  },
  zoomedOut: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    transform: 'translate(0%, 0%)',
  }
};
  
export const variantsFrame = {
  zoomedIn: { 
    display: 'block',
    opacity: 1,
    zIndex: '1'
  },
  zoomedOut: { 
    transitionEnd: { display: 'none' },
    opacity: 0,
  }
};