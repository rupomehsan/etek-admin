<template>
    <!--Start sidebar-wrapper-->
    <div id="sidebar-wrapper">
        <div class="brand-logo">
            <router-link :to="{ name: `adminDashboard` }" class="d-flex align-items-center">
                <!-- <img src="https://files.etek.com.bd/images/etek_logo.png" class="logo-icon" alt="logo icon"> -->
                <h5 class="logo-text">ETEK ADMIN</h5>
            </router-link>
            <div class="close-btn"><i class="zmdi zmdi-close"></i></div>
        </div>

        <ul class="metismenu" id="menu">
            <li>
                <router-link :to="{ name: `adminDashboard` }" class="" href="javascript:void();">
                    <div class="parent-icon">
                        <img src="https://files.etek.com.bd/images/icon_dashboard.png" alt="">
                    </div>
                    <div class="menu-title">Dashboard</div>
                </router-link>
            </li>

            <side-bar-drop-down-menus :icon="`fa fa-plus`"
                :icon_image="`https://files.etek.com.bd/images/icon_user.png`" :menu_title="`User Management`" :menus="[
                    {
                        route_name: `AllUser`,
                        title: `Customers`,
                    },
                    {
                        route_name: `AllSupplier`,
                        title: `Suppliers`,
                    },
                    {
                        route_name: `AllUser`,
                        title: `Retailers`,
                    },
                    {
                        route_name: `AllUser`,
                        title: `Employees`,
                    },

                ]" />

            <side-bar-drop-down-menus :icon_image="`https://files.etek.com.bd/images/icon_accounting.png`"
                :icon="`fa fa-plus`" :menu_title="`Accounts`" :menus="[
                    {
                        route_name: `AllCategory`,
                        title: `Expendeture Groups`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Expendetures`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Incomes`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Expenses`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Journals`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Ledger`,
                    },
                ]" />

            <side-bar-drop-down-menus :icon_image="`https://files.etek.com.bd/images/icon_product_management.png`"
                :icon="`fa fa-plus`" :menu_title="`Products`" :menus="[
                    {
                        route_name: `CreateProduct`,
                        title: `Create Product`,
                    },
                    {
                        route_name: `AllProduct`,
                        title: `Products`,
                    },
                    {
                        route_name: `BarcodeGenerator`,
                        title: `Barcode Generate`,
                    },
                    {
                        route_name: `AllCategoryGroup`,
                        title: `Category Group`,
                    },
                    {
                        route_name: `AllCategory`,
                        title: `Category`,
                    },
                    {
                        route_name: `AllBrand`,
                        title: `Brand`,
                    },
                    {
                        route_name: `AllManufacture`,
                        title: `Manufacture`,
                    },
                    {
                        route_name: `AllVariantGroup`,
                        title: `Varient Groups`,
                    },
                    {
                        route_name: `AllVariant`,
                        title: `Varient`,
                    },
                    {
                        route_name: `AllVariantValue`,
                        title: `Varient Values`,
                    },
                    {
                        route_name: `AllUnitGroup`,
                        title: `Unit Group`,
                    },
                    {
                        route_name: `AllUnit`,
                        title: `Units`,
                    },
                    {
                        route_name: `AllProductTag`,
                        title: `Product Tags`,
                    },
                    {
                        route_name: `AllProductCategoryTag`,
                        title: `Product Category Tags`,
                    },
                ]" />

            <side-bar-drop-down-menus :icon_image="`https://files.etek.com.bd/images/icon_sales.png`"
                :icon="`fa fa-plus`" :menu_title="`Sales`" :menus="[
                    {
                        route_name: `AllCategory`,
                        title: `Orders`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Quotations`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Payments`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Refunds`,
                    },
                ]" />

            <side-bar-drop-down-menus :icon_image="`https://files.etek.com.bd/images/icon_ecommerce.png`"
                :icon="`fa fa-plus`" :menu_title="`e-Commerce`" :menus="[
                    {
                        route_name: `Allelectronics_sales_order`,
                        title: `Orders`,
                    },

                    {
                        route_name: `Allcustomer_wishlists`,
                        title: `Customer Wishlist`,
                    },
                    {
                        route_name: `Allbanner`,
                        title: `Banner`,
                    },
                    {
                        route_name: `Allside_banner`,
                        title: `Side Banner`,
                    },
                    {
                        route_name: `Allblog_categories`,
                        title: `Blog Categories`,
                    },
                    {
                        route_name: `Allblog`,
                        title: `Blog`,
                    },
                    {
                        route_name: `Allcontact_us`,
                        title: `Contact Us`,
                    },
                    {
                        route_name: `Allsubscribers`,
                        title: `Subscribers`,
                    },
                    {
                        route_name: `TermsAndCondition`,
                        title: `Terms and Condition`,
                    },
                    {
                        route_name: `ReturnPolicy`,
                        title: `Return Policy`,
                    },
                    {
                        route_name: `ShipingAndDelivery`,
                        title: `Shipping and Delivery`,
                    },

                    {
                        route_name: `Allgeneral_seos`,
                        title: `General SEO`,
                    },
                    {
                        route_name: `Allfaqs`,
                        title: `FAQ`,
                    },
                    {
                        route_name: `Allproduct_faq_reply`,
                        title: `Product FAQ reply`,
                    },
                    {
                        route_name: `BreakingNews`,
                        title: `Breaking News`,
                    },
                    {
                        route_name: `Allpromo_codes`,
                        title: `Promo Codes`,
                    },
                    {
                        route_name: `Allproduct_offers`,
                        title: `Offers`,
                    },
                    {
                        route_name: `OfferProduct`,
                        title: `Discount Products`,
                    },
                    {
                        route_name: `FeatureProducts`,
                        title: `Featured Products`,
                    },
                    {
                        route_name: `HideProducts`,
                        title: `Hide Products`,
                    },
                    {
                        route_name: `FeatureCategory`,
                        title: `Featured Categories`,
                    },
                    {
                        route_name: `HideCategory`,
                        title: `Hide Categories`,
                    },
                ]" />

            <side-bar-drop-down-menus :icon_image="`https://files.etek.com.bd/images/icon_inventory.png`"
                :icon="`fa fa-plus`" :menu_title="`Inventory`" :menus="[
                    {
                        route_name: `AllCategory`,
                        title: `Wearhouse`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Stocks`,
                    },
                ]" />

            <side-bar-drop-down-menus :icon_image="`https://files.etek.com.bd/images/icon_supplier.png`"
                :icon="`fa fa-plus`" :menu_title="`Supplier`" :menus="[
                    {
                        route_name: `AllCategory`,
                        title: `Supplier Types`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Suppliers`,
                    },
                ]" />

            <side-bar-drop-down-menus :icon_image="`https://files.etek.com.bd/images/icon_retailer.png`"
                :icon="`fa fa-plus`" :menu_title="`Retailer`" :menus="[
                    {
                        route_name: `AllCategory`,
                        title: `Retailer Types`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Retailers`,
                    },
                ]" />


            <side-bar-drop-down-menus :icon_image="`https://files.etek.com.bd/images/icon_purchase.png`"
                :icon="`fa fa-plus`" :menu_title="`Purchase`" :menus="[
                    {
                        route_name: `AllCategory`,
                        title: `Purchase Orders`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Purchase Payments`,
                    },
                    {
                        route_name: `AllBlog`,
                        title: `Refunds`,
                    },
                ]" />

            <side-bar-single-menu
                :menu_title="`Reports`"
                :route_name="`ReportList`"
                :icon_image="`https://files.etek.com.bd/images/icon_report.png`"
            />

            <side-bar-drop-down-menus :icon_image="`https://files.etek.com.bd/images/icon_settings.png`"
                :icon="`fa fa-plus`" :menu_title="`Configuration`" :menus="[
                    {
                        route_name: `EmailConfig`,
                        title: `Email`,
                    },
                    {
                        route_name: `SmsConfig`,
                        title: `SMS`,
                    },
                    {
                        route_name: `PaymentGatewayConfig`,
                        title: `Payment Gateway`,
                    },
                    {
                        route_name: `TelegramConfig`,
                        title: `Telegram`,
                    },
                    {
                        route_name: `TwilioConfig`,
                        title: `Twilio`,
                    },
                ]" />



        </ul>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { auth_store } from '../../../../store/auth_store';
import SideBarDropDownMenus from './SideBarDropDownMenus.vue';
import SideBarSingleMenu from './SideBarSingleMenu.vue';
export default {
    components: { SideBarDropDownMenus, SideBarSingleMenu },
    mounted: function(){
        $("#menu").metisMenu();
    },
    methods: {
        ...mapActions(auth_store, ['log_out']),
        logout_submit: function () {
            let confirm = window.confirm('logout');
            if (confirm) {
                this.log_out();
            }
        }
    }
}
</script>

<style></style>
