import React from 'react'
import PropTypes from 'prop-types'
import formatDate from '../utils/formatDate'
import { useState } from 'react'
import { UpdateIncPackages } from '../actions/packageIncoming';
import { connect } from 'react-redux'

const GuardTableItems = ({pack , cnt , UpdateIncPackages}) => {

    const [formData , setFormData] = useState({
        id : pack._id,
        name : pack.name,
        username : pack.username ? pack.username : "",
        PackageDescription : pack.PackageDescription,
        PickedBy : (pack.Status === 'Picked') ? pack.PickedBy : "",
        PickedAt : (pack.Status === 'Picked') ? pack.PickedAt : "",
        current : (pack.Status === 'Picked')
    })
    
    const {name , PackageDescription , username , PickedBy , PickedAt , current} = formData
    
    const onChange = e => {
        setFormData({...formData , [e.target.name] : e.target.value});
    }

    const onClick = async e => {
        e.preventDefault();
        
        if (current === false){
            formData.PickedAt = undefined;
            formData.PickedBy = undefined;
        }
        
        // if ((formData.current === (pack.Status === "Picked") )&& (formData.PickedBy === pack.PickedBy) && (formData.PickedAt === pack.PickedAt)){
        //     formData.PickedAt = pack.PickedAt;
        // }
        UpdateIncPackages(formData);
      }

    return (
        <tr>
              <th scope="row">{cnt}</th>
              <td>{pack.name}</td>
              <td>
              <input
              type="text"
              className="form-control"
              id="Name"
            placeholder={pack.username || "Username"}
                //   defaultValue={pack.username || "Username"}
              name="username"
              value={username}
              onChange={e => onChange(e)} 
              required
            />
              </td>
              <td>
              <input
              type="text"
              className="form-control"
              id="Description"
            placeholder={pack.PackageDescription || "Description"}
                //   defaultValue={pack.username || "Username"}
              name="PackageDescription"
              value={pack.PackageDescription}
              onChange={e => onChange(e)} 
              required
            />
              </td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="current"
                    value={current}
                    checked={current}
                    id="flexRadioDefault1"
                    onChange={() => setFormData({ ...formData, current: !current })}
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Picked
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="current"
                    value={!current}
                    checked={!current}
                    id="flexRadioDefault2"
                    onChange={() => setFormData({ ...formData, current: !current })}
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Not Picked
                  </label>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="PickedBy"
                    value={PickedBy}
                  placeholder={pack.Status === "Picked" ? pack.PickedBy : "-"}
                  onChange={e => onChange(e)} 
                  aria-label="Pickedby"
                  aria-describedby="basic-addon1"
                />
              </td>
              <td>{pack.Status === "Picked" ? formatDate(pack.PickedAt) : "--:--:----"}</td>
              <td>
                <button type="button" className="btn btn-primary" onClick={e=>onClick(e)}  >
                  Save
                </button>
              </td>
            </tr>
    )
}

GuardTableItems.propTypes = {
    UpdateIncPackages : PropTypes.func.isRequired
}

export default connect(null , {UpdateIncPackages})(GuardTableItems)
