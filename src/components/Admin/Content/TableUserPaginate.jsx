import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const TableUserPaginate = (props) => {
  const { listUsers } = props;

  const handlePageClick = (event) => {
    props.fetchListUsersWithPaginate(+event.selected +1)
    console.log(`User requested page number ${event.selected}`);
  };
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td className=" flex gap-2">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        props.handleClickBtnView(item);
                      }}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        props.handleClickBtnUpdate(item);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        props.handleClickBtDelete(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    <div className="flex justify-center">
        <ReactPaginate
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={props.pageCount}
          previousLabel="< Prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
    </div>
    </>
  );
};
export default TableUserPaginate;
