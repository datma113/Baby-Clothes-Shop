import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from "../../redux/actions/actAdmin";
import Ucate_Update from "./Ucate_Update"
const ListCategory = () => {
     
     const dispatch = useDispatch();
     const categories = useSelector((state) => state.categories);
 
     const categoriesMap = categories.map((category, index) => {
         return (
             <tr key={index} className="text-center">
                 <td>{index + 1}</td>
                 <td>{category.name}</td>
               
                 <td>
                     {" "}
                      <Ucate_Update id={category.id} />
                 </td>
              
             </tr>
         );
     });
 
     useEffect(() => {
         dispatch(getCategories());
     }, []);
     return (
          <div>
                <div>
            <table className="table table-striped table-border table-suppliers table-hover">
                <thead className="bg-dark text-light">
                    <tr className="text-center">
                        <th>STT</th>

                        <th>Loại sản phẩm</th>
                        <th> . </th>
                    </tr>
                </thead>
                <tbody>{categoriesMap}</tbody>
            </table>
        </div>
          </div>
     )
}

export default ListCategory
