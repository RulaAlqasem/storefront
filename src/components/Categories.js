import React from 'react';
import './Categories.scss';
import { useDispatch, useSelector } from 'react-redux';
import { switchCategory, switchProducts } from '../store/action';

const Categories = (props) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(props);
  return (
    <div>
      <h2>Browse Our Categories</h2>
      {state.categories.categories.map((category, i) => {
        return (
          <button key={i} onClick={() => { dispatch(switchCategory(category.name)); dispatch(switchProducts(category.name)); }} title={category.name}>{category.displayName}</button>
        )
      })}
    </div>
  )
}



export default Categories;