/* import axios from 'axios';
import { useEffect, useReducer, useState } from 'react'; */
import { useParams } from 'react-router-dom';

// get the slug from url and show it on the productpage using params
function ProductPage() {
  const params = useParams();
  const { slug } = params;
  return <div>{slug}</div>;
}
export default ProductPage;
