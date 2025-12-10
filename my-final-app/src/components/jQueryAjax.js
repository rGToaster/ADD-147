import React, { useState } from 'react';

function jQueryAjax() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadContent = () => {
    setIsLoading(true);
    
    // Check if jQuery is available
    if (window.$) {
      window.$.ajax({
        url: '/ajax-content.txt',
        method: 'GET',
        dataType: 'text',
        success: function(data) {
          setContent(data);
          setIsLoading(false);
        },
        error: function() {
          setContent('<p style="color: red;">Error loading content. Please make sure ajax-content.txt exists in the public folder.</p>');
          setIsLoading(false);
        }
      });
    } else {
      setContent('<p style="color: red;">jQuery is not loaded. Please ensure jQuery is included in index.html.</p>');
      setIsLoading(false);
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>jQuery AJAX</h2>
      <p style={styles.description}>
        This section demonstrates jQuery AJAX functionality. Click the button below to load and display 
        content from a text file using jQuery's AJAX method.
      </p>
      <button 
        onClick={handleLoadContent} 
        style={styles.button}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load Content from Text File'}
      </button>
      {content && (
        <div 
          style={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
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
  button: {
    background: '#667eea',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    fontSize: '1.1em',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    marginBottom: '20px'
  },
  content: {
    marginTop: '20px',
    padding: '20px',
    background: 'white',
    borderRadius: '8px',
    minHeight: '100px'
  }
};

export default jQueryAjax;


