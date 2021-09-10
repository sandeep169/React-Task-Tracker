
import React from 'react'
import ReactDOM from 'react-dom'
import StoreSelectDropdown from './StoreSelectDropdown';
import ProductsList from './ProductsList';
import ManageStore from './ManageStore';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <StoreSelectDropdown />,
    document.getElementById('store_select_component_root')
  ),
  ReactDOM.render(
    <ProductsList />,
    document.getElementById('products_list_component_root')
  ) 
  //mine
  ReactDOM.render(
    <ManageStore />,
    document.getElementById('manage_store_list_component_root')
  ),
  ReactDOM.render(
    <ManageStore />,
    document.getElementById('manage_store_component_root')
  )

});   