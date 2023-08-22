import { useSelector } from 'react-redux';
import './_cat-nav.scss';
import categorySlice from '../../Redux/Category/categorySlice/categorySlice';



const CatNav = () => {
  const categories = useSelector(categorySlice.getInitialState);
  return (
    <>
      <div className='cat-nav-container container'>
        <ul>
          {
            categories.map((categories)=>{
              return(
                <li className='list-items'> <a href='#'> {categories} </a> </li>

              )
            })
          }
        
        </ul>
      </div>
    </>
  )
}

export default CatNav;
