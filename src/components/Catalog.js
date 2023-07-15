import React from 'react';
import styled from '@emotion/styled';

const CatalogSection = styled.div`
  padding: 20px;
`;

const FlowerCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

function Catalog() {
  return (
    <CatalogSection>
      <h2>Fresh Flowers and Lush Plants Catalog</h2>
      <FlowerCard>{/* Add content for the first flower card */}</FlowerCard>
      <FlowerCard>{/* Add content for the second flower card */}</FlowerCard>
      {/* Add more flower cards as needed */}
    </CatalogSection>
  );
}

export default Catalog;
