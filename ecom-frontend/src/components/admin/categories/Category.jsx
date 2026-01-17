import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { FaFolderOpen, FaThList } from "react-icons/fa";
import toast from "react-hot-toast";

import Modal from "../../shared/Modal";
import AddCategoryForm from "./AddCategoryForm";
import Loader from "../../shared/Loader";
import { DeleteModal } from "../../../components/shared/DeleteModal";
import useCategoryFilter from "../../../hooks/useCategoryFilter";
import ErrorPage from "../../shared/ErrorPage";
import { deleteCategoryDashboardAction } from "../../../store/actions";
import { categoryTableColumns } from "../../helper/tableColumn";
import '../../../assets/style/category.scss';

const Category = () => {
  const [searchParams] = useSearchParams();
  const pathname = useLocation().pathname;
  const params = new URLSearchParams(searchParams);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { categoryLoader, errorMessage } = useSelector((state) => state.errors);
  const { categories, pagination } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(
    pagination?.pageNumber + 1 || 1
  );

  // Calling the `useCategoryFilter` custom hook to handle category fetching and pagination based on the current URL parameters.
  useCategoryFilter();

  const tableRecords = categories?.map((item) => ({
    id: item.categoryId,
    categoryName: item.categoryName,
    version: item.version,
  }));

  const handleEdit = (category) => {
    setOpenUpdateModal(true);
    setSelectedCategory(category);
  };

  const handleDelete = (category) => {
    setSelectedCategory(category);
    setOpenDeleteModal(true);
  };

  const onDeleteHandler = () => {
    dispatch(
      deleteCategoryDashboardAction(setOpenDeleteModal, selectedCategory?.id, toast)
    );
  };

  const handlePaginationChange = (paginationModel) => {
    const page = paginationModel.page + 1; // Adjust to 1-based index
    setCurrentPage(page);

    params.set("page", page.toString());
    navigate(`${pathname}?${params}`);
  };

  const emptyCategories = !categories || categories?.length === 0;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  return (
    <div className="category-page">
      <div className="page-header">
        <div className="header-title">
          <h1 className="page-title">Categories</h1>
          <p className="page-subtitle">Manage your product categories</p>
        </div>
        <div className="header-actions">
          <button
            onClick={() => setOpenModal(true)}
            className="add-category-btn"
            style={{ display: 'flex', opacity: 1, visibility: 'visible' }}
          >
            <FaThList className="btn-icon" />
            Add Category
          </button>
        </div>
      </div>

      {categoryLoader ? (
        <Loader />
      ) : (
        <>
          {emptyCategories ? (
            <div className="empty-state">
              <FaFolderOpen className="empty-icon" />
              <h2 className="empty-title">
                No Categories Created Yet
              </h2>
              <p className="empty-text">
                Get started by creating your first product category. Categories help organize your products for customers.
              </p>
              <div className="empty-action">
                <button
                  onClick={() => setOpenModal(true)}
                  className="add-category-btn"
                >
                  <FaThList className="btn-icon" />
                  Create Category
                </button>
              </div>
            </div>
          ) : (
            <div className="data-grid-container">
              <DataGrid
                className="w-full"
                rows={tableRecords}
                columns={categoryTableColumns(handleEdit, handleDelete)}
                paginationMode="server"
                rowCount={pagination?.totalElements || 0}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: pagination?.pageSize || 10,
                      page: currentPage - 1,
                    },
                  },
                }}
                onPaginationModelChange={handlePaginationChange}
                disableRowSelectionOnClick
                disableColumnResize
                pageSizeOptions={[pagination?.pageSize || 10]}
                pagination
                paginationOptions={{
                  showFirstButton: true,
                  showLastButton: true,
                  hideNextButton: currentPage === pagination?.totalPages,
                }}
              />
            </div>
          )}
        </>
      )}

      <Modal
        open={openUpdateModal || openModal}
        setOpen={openUpdateModal ? setOpenUpdateModal : setOpenModal}
        title={openUpdateModal ? "Update Category" : "Add Category"}
      >
        <AddCategoryForm
          setOpen={openUpdateModal ? setOpenUpdateModal : setOpenModal}
          open={categoryLoader}
          category={selectedCategory}
          update={openUpdateModal}
        />
      </Modal>

      <DeleteModal
        open={openDeleteModal}
        loader={categoryLoader}
        setOpen={setOpenDeleteModal}
        title="Are you want to delete this category"
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};

export default Category;