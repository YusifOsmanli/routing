import MainRoot from "../pages/Main/MainRoot";
import Home from "../pages/Main/Home/Home.jsx"
import Favorites from "../pages/Main/Favorites/Favorites.jsx"
import Product from "../pages/Main/Product/Product";
import ProductDetail from "../pages/Main/ProductDetail/ProductDetail.jsx";
import AdminRoot from "../pages/Admin/AdminRoot.jsx"
import AddProduct from "../pages/Admin/AddProduct/AddProduct.jsx"
import EditProducts from "../pages/Admin/EditProducts/EditProducts.jsx"
import Dashboard from "../pages/Admin/Dashbaoard/Dashboard.jsx"
const ROUTES = [{
    path: '/',
    element: <MainRoot />,
    children: [
        {
        path: '',
        element: <Home />
    }, {
        path: '/favorites',
        element: <Favorites />
    }, {
        path: '/product',
        element: <Product />
    }, {
        path: '/:id',
        element: <ProductDetail />
    }]
}, {
    path: '/admin',
    element: <AdminRoot />,
    children: [{
        path:'',
        element:<Dashboard/>
    },
        {
        path: 'addproduct',
        element: <AddProduct />
    }, {
        path: 'editproducts',
        element: <EditProducts />
    }]
}]

export default ROUTES