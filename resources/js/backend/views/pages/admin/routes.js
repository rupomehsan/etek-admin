import Layout from "./partials/Layout.vue"
import Dashboard from "./Dashboard.vue"
//user management routes
import user_routes from "./management/UserManagement/users/setup/routes";
import user_supplier_routes from "./management/UserManagement/suppliers/setup/routes";
import product_brand_routes from "./management/ProductManagement/Brand/setup/routes"
import product_manufacture_routes from "./management/ProductManagement/Manufacture/setup/routes"
import product_category_routes from "./management/ProductManagement/Category/setup/routes"
import CategoryGroup from "./management/ProductManagement/CategoryGroup/setup/routes"
import product_varient_routes from "./management/ProductManagement/Variant/setup/routes"
import product_varient_group_routes from "./management/ProductManagement/VariantGroup/setup/routes"
import product_varient_value_routes from "./management/ProductManagement/VariantValue/setup/routes"
import product_color_routes from "./management/ProductManagement/Color/setup/routes"
import product_routes from "./management/ProductManagement/Product/setup/routes"
import product_unit_groups from "./management/ProductManagement/UnitGroup/setup/routes"
import product_units from "./management/ProductManagement/Unit/setup/routes"
import product_tags from "./management/ProductManagement/ProductTag/setup/routes"
import product_category_tags from "./management/ProductManagement/ProductCategoryTag/setup/routes"
import BarcodeGenerator from "./management/ProductManagement/Barcode/BarcodeGenerator.vue"
import configuration_routes from "./management/Configuration/setup/routes"
import report_routes from "./management/Report/setup/routes"
// eCommerce management
import ecommer_order_routes from "./management/Ecommerce/Order/setup/routes"
import customer_wishlist_routes from "./management/Ecommerce/CustomerWishlist/setup/routes"
import home_banner_routes from "./management/Ecommerce/Banner/setup/routes"
import home_side_banner_routes from "./management/Ecommerce/SideBanner/setup/routes"
import blog_category_routes from "./management/Ecommerce/BlogCategory/setup/routes"
import blog_routes from "./management/Ecommerce/Blog/setup/routes"
import contact_us_routes from "./management/Ecommerce/ContactUs/setup/routes"
import subscribers_routes from "./management/Ecommerce/Subscribers/setup/routes"
import website_pages_routes from "./management/Ecommerce/Pages/route"
import faq_routes from "./management/Ecommerce/Faq/setup/routes"
import promo_code_routes from "./management/Ecommerce/PromoCode/setup/routes"
import product_faq_routes from "./management/Ecommerce/ProductFAQ/setup/routes"
import general_seo_routes from "./management/Ecommerce/GeneralSeo/setup/routes"
import offers_routes from "./management/Ecommerce/Offer/setup/routes"
import ecommerce_order_routes from "./management/Ecommerce/SalesOrder/setup/routes"



const routes = {
    path: '',
    component: Layout,
    children: [

        {
            path: 'dashboard',
            component: Dashboard,
            name: 'adminDashboard',
        },
        {
            path: '',
            name: 'AllCategory',
            component: Dashboard,
        },
        {
            path: '',
            name: 'AllBlog',
            component: Dashboard,
        },
        {
            path: 'barcode-generate',
            name: 'BarcodeGenerator',
            component: BarcodeGenerator,
        },

        //blog management routes
        // blog_category_routes,
        // blog_routes,
        //user management routes
        user_routes,
        user_supplier_routes,
        // product management
        product_brand_routes,
        product_manufacture_routes,
        product_category_routes,
        CategoryGroup,
        product_varient_group_routes,
        product_varient_routes,
        product_varient_value_routes,
        product_color_routes,
        product_routes,
        product_unit_groups,
        product_units,
        product_tags,
        product_category_tags,
        configuration_routes,
        report_routes,
        // eCommerce management
        ecommer_order_routes,
        customer_wishlist_routes,
        home_banner_routes,
        home_side_banner_routes,
        blog_category_routes,
        blog_routes,
        contact_us_routes,
        subscribers_routes,
        website_pages_routes,
        faq_routes,
        promo_code_routes,
        product_faq_routes,
        general_seo_routes,
        offers_routes,
        ecommerce_order_routes,
    ]
};


export default routes;
