import React, { useState } from 'react';
import './HomePage.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import SumberEnergi from './SumberEnergi';

const HomePage = () => {
  const [showSumberEnergi, setShowSumberEnergi] = useState(false);

  const handleSumberEnergiClick = () => {
    setShowSumberEnergi(true);
  };

  return (
    <div className="home-page-container">
      <Container>
        <Row>
          <Col md={4}>
            <Card className="topic-card" onClick={handleSumberEnergiClick}>
              <Card.Body>
                <div className="topic-icon">
                  {/* Add your icon here */}
                </div>
                <Card.Title>Sumber Energi</Card.Title>
                <Card.Text>4 Sub Bab Materi</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Add other topic cards here */}
        </Row>
      </Container>

      {showSumberEnergi && (
        <SumberEnergi /> // Render SumberEnergi component if showSumberEnergi is true
      )}
    </div>
  );
};

export default HomePage;