import React, { useEffect, useRef } from 'react';

function jQueryAnimation() {
  const divRef = useRef(null);

  useEffect(() => {
    // Wait for jQuery to be available
    const checkJQuery = () => {
      if (window.$ && divRef.current) {
        // Animate the div from left off-screen to center
        window.$(divRef.current).animate({
          left: '50%',
          marginLeft: '-175px' // Half of div width (350px / 2)
        }, 'slow');
      } else if (!window.$) {
        // Retry if jQuery isn't loaded yet
        setTimeout(checkJQuery, 100);
      }
    };
    
    checkJQuery();
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>jQuery Animation</h2>
      <p style={styles.description}>
        This section demonstrates jQuery animation. The div below starts positioned off-screen to the left 
        (using negative CSS values) and animates to the center of the browser window using jQuery's animate() 
        function with 'slow' speed.
      </p>
      <div style={styles.container}>
        <div ref={divRef} style={styles.animatedDiv}>
          <h2 style={styles.divTitle}>Animated Content</h2>
          <p style={styles.divText}>
            This div has been animated from the left side of the screen to the center using jQuery!
          </p>
          <img 
            src="/logo192.png" 
            alt="Small image" 
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: '#f8f9fa',
    borderRadius: '10px',
    padding: '25px',
    marginBottom: '30px',
    borderLeft: '5px solid #667eea'
  },
  title: {
    color: '#667eea',
    marginBottom: '15px',
    fontSize: '1.8em'
  },
  description: {
    color: '#666',
    marginBottom: '20px',
    lineHeight: '1.6'
  },
  container: {
    position: 'relative',
    height: '300px',
    marginTop: '20px',
    overflow: 'hidden',
    background: '#e9ecef',
    borderRadius: '8px'
  },
  animatedDiv: {
    position: 'absolute',
    width: '350px',
    padding: '20px',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    left: '-400px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  divTitle: {
    color: '#667eea',
    marginBottom: '10px',
    fontSize: '1.5em'
  },
  divText: {
    color: '#666',
    marginBottom: '15px',
    lineHeight: '1.5'
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto'
  }
};

export default jQueryAnimation;

