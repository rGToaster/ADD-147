import React from 'react';

function JSONDisplay() {
  // JSON Data - 5 TV Shows with 4 fields each
  const tvShows = [
    {
      name: "Breaking Bad",
      mainCharacter: "Walter White",
      network: "AMC",
      startDate: "January 20, 2008"
    },
    {
      name: "Stranger Things",
      mainCharacter: "Eleven",
      network: "Netflix",
      startDate: "July 15, 2016"
    },
    {
      name: "The Office",
      mainCharacter: "Michael Scott",
      network: "NBC",
      startDate: "March 24, 2005"
    },
    {
      name: "Game of Thrones",
      mainCharacter: "Jon Snow",
      network: "HBO",
      startDate: "April 17, 2011"
    },
    {
      name: "The Crown",
      mainCharacter: "Queen Elizabeth II",
      network: "Netflix",
      startDate: "November 4, 2016"
    }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>JSON Data Display</h2>
      <p style={styles.description}>
        This section demonstrates displaying JSON data on a web page. Below are 5 TV show records, 
        each containing 4 fields: Name of Show, Main Character, Network/Streaming Service, and Start Date.
      </p>
      <div style={styles.grid}>
        {tvShows.map((show, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{show.name}</h3>
            <p style={styles.cardText}>
              <strong>Main Character:</strong> {show.mainCharacter}
            </p>
            <p style={styles.cardText}>
              <strong>Network/Streaming:</strong> {show.network}
            </p>
            <p style={styles.cardText}>
              <strong>Start Date:</strong> {show.startDate}
            </p>
          </div>
        ))}
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  card: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  cardTitle: {
    color: '#667eea',
    marginBottom: '12px',
    fontSize: '1.3em'
  },
  cardText: {
    margin: '8px 0',
    color: '#555'
  }
};

export default JSONDisplay;


