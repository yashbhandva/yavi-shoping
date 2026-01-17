import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { dashboardProductsAction, fetchProducts } from "../store/actions";

const useProductFilter = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams();

        const currentPage = searchParams.get("page")
            ? Number(searchParams.get("page"))
            : 1;

        params.set("pageNumber", currentPage - 1);

        const sortOrder = searchParams.get("sortby") || "asc";
        const categoryParams = searchParams.get("category") || null;
        const keyword = searchParams.get("keyword") || null;
        params.set("sortBy","price");
        params.set("sortOrder", sortOrder);

        if (categoryParams) {
            params.set("category", categoryParams);
        }

        if (keyword) {
            params.set("keyword", keyword);
        }

        const queryString = params.toString();
        console.log("QUERY STRING", queryString);
        
        dispatch(fetchProducts(queryString));

    }, [dispatch, searchParams]);
};


export const useDashboardProductFilter = () => {
    const { user } = useSelector((state) => state.auth);
    const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams();

        // Handle pagination
        const currentPage = searchParams.get("page")
            ? Number(searchParams.get("page"))
            : 1;
        params.set("pageNumber", currentPage - 1);

        // Handle search keyword
        const keyword = searchParams.get("keyword");
        if (keyword) {
            params.set("keyword", keyword);
        }

        // Handle category filter
        const categoryId = searchParams.get("categoryId");
        if (categoryId) {
            params.set("categoryId", categoryId);
        }

        // Set default sorting by productId in ascending order
        params.set("sortBy", "productId");
        params.set("sortOrder", "asc");

        // Override with URL parameters if they exist
        if (searchParams.has("sortBy")) {
            params.set("sortBy", searchParams.get("sortBy"));
        }
        if (searchParams.has("sortOrder")) {
            params.set("sortOrder", searchParams.get("sortOrder"));
        }

        const queryString = params.toString();
        dispatch(dashboardProductsAction(queryString, isAdmin));

    }, [dispatch, searchParams, isAdmin]);
};

export default useProductFilter;