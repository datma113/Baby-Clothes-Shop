import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSuppliers } from "../../redux/actions/actAdmin";

import Us_update from './Us_update'
const ListSupplier = () => {
     const dispatch = useDispatch()
     const suppliers = useSelector(state => state.suppliers)

     const suppliersMap = suppliers.map((supplier, index) => {
          return <tr key={index} className="text-center">
          <td>{supplier.name}</td>
          <td>{supplier.address}</td>
          <td>{supplier.email}</td>
          <td >{supplier.phone}</td>
          <td> <Us_update id={supplier.id}/></td>
     </tr>
     })
     
     useEffect(() => {
         dispatch(getSuppliers());
          
     }, [])

     return (
          <div>
               <table className="table table-striped table-border table-suppliers table-hover">
                    <thead className="bg-secondary text-light">
                         <tr className="text-center"> 
                              <th>Tên NCC</th>
                              <th>Địa chỉ</th>
                              <th>Email</th>
                              <th>Liên lạc</th>
                              <th> . </th>
                         </tr>
                    </thead>
                    <tbody>
                        {suppliersMap}
                    </tbody>
               </table>
          </div>
     )
}

export default ListSupplier
