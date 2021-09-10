import React, { useEffect, useState } from 'react';
import { fetchManageStore } from './api';

const ManageStore = () => {
  const store_orgainzation_id =rData.organization_id;
  const store_name = rData.name;

  const [storeData, setStoreData] = useState([]);
  // const getData = async () => {

  //   fetchManageStore()


  //   fetch("organizations/1/stores.json")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json)
  //       setData(json);
  //     })

  // };
  // useEffect(() => {
  //   // calling our method getData() here so that whenever page reloaded data will fetch
  //   getata();

  // }, []);
  useEffect(() =>{
    fetchManageStore().then(storeData = setStoreData(storeData))
  },[]);
 
  const ManageStoreHandler = (store) =>{
    window.location.href = `${location.origin}/stores/${store}/manage-store`;
  }
  return (
    <>
      <div>
        <br></br>
        <button onClick={ManageStoreHandler}>Click</
        button>
        
        <br />
        <br />
        {/* <pre>{JSON.stringify(data,null,3)}</pre> */}
        {/* <pre>{JSON.stringify(data,null,3)}</pre> */}

        {storeData?.map((store) =>
          <li>
            {store.name}
          </li>
        )}
        
      </div>
      <div class="table table-striped" id="results">
        <div class="theader">
          <div class="table_header wd-auto">Store Name </div>
          <div class="table_header wd-20">Store Description</div>
          <div class="table_header">Products Listed</div>
          <div class="table_header">Users</div>
          <div class="table_header">Action</div>
        </div>
        <div class="table_row">
          <div class="table_small">
            <div class="table_cell">Store Name</div>
            <div class="table_cell">Globex Corporation</div>
          </div>
          <div class="table_small">
            <div class="table_cell">Store Description</div>
            <div class="table_cell text-wrap">Aliquam sed luctus turpis. Proin nisi ligula,
              elementum eget feugiat sed.
              <span class="sd-edit" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i class="fal fa-edit"></i></span>
            </div>
          </div>
          <div class="table_small">
            <div class="table_cell">Products Listed</div>
            <div class="table_cell">Demo Text</div>
          </div>
          <div class="table_small">
            <div class="table_cell">Users</div>
            <div class="table_cell customer_badge text-wrap">
              <span class="badge bg-white text-black border">Robert - Admin</span>
              <span class="badge bg-white text-black border">Chris - Member</span>
            </div>
          </div>
          <div class="table_small">
            <div class="table_cell">Action</div>
            <div class="table_cell button-block"><button data-bs-toggle="modal" data-bs-target="#exampleModalCenteradd" aria-label="" class="btn btn-primary bg-transparent btn-md  m-t-10 d-block" type="submit"><span><i class="fal fa-plus-circle"></i></span>Add</button></div>
          </div>
        </div>
      </div>

    </>
  );
}
export default ManageStore;
// export defualt ManageStore;
import React from 'react'

const ManageStore = () => {
    return (
        <>
            <div className="table table-striped" id="results">
                <div className="theader">
                    <div className="table_header wd-auto">Store Name</div>
                    <div className="table_header wd-20">Store Description</div>
                    <div className="table_header">Products Listed</div>
                    <div className="table_header">Users</div>
                    <div className="table_header">Action</div>
                </div>
                <div className="table_row">
                    <div className="table_small">
                        <div className="table_cell">Store Name</div>
                        <div className="table_cell">Globex Corporation</div>
                    </div>
                    <div className="table_small">
                        <div className="table_cell">Store Description</div>
                        <div className="table_cell text-wrap">Aliquam sed luctus turpis. Proin nisi ligula,
                            elementum eget feugiat sed.
                            <span className="sd-edit" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="fal fa-edit"></i></span>
                        </div>
                    </div>
                    <div className="table_small">
                        <div className="table_cell">Products Listed</div>
                        <div className="table_cell">Demo Text</div>
                    </div>
                    <div className="table_small">
                        <div className="table_cell">Users</div>
                        <div className="table_cell customer_badge text-wrap">
                            <span className="badge bg-white text-black border">Robert - Admin</span>
                            <span className="badge bg-white text-black border">Chris - Member</span>
                        </div>
                    </div>
                    <div className="table_small">
                        <div className="table_cell">Action</div>
                        <div className="table_cell button-block"><button data-bs-toggle="modal" data-bs-target="#exampleModalCenteradd" aria-label="" className="btn btn-primary bg-transparent btn-md  m-t-10 d-block" type="submit"><span><i className="fal fa-plus-circle"></i></span>Add</button></div>
                    </div>
                </div>
            </div>
            <div className="col d-flex justify-content-end action-btn">
                <button data-bs-toggle="modal" data-bs-target="#exampleModalCenter" aria-label="" className="btn btn-primary btn-md bg-orange  m-t-10 d-block" type="submit"><span><i className="far fa-external-link"></i></span>Create New Store</button>
            </div>
        </>
    )
}

export default ManageStore
x   