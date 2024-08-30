import app_config from '../../../../app_config';
import setup_type from './setup_type';

const prefix: string = 'ECommerce Orders';

const setup: setup_type = {

    prefix,
    permission: [`admin`, `super_admin`],

    api_host: app_config.api_host,
    api_version: app_config.api_version,
    api_end_point: 'sales-ecommerce-orders',

    module_name: 'ecommerce_orders',
    store_prefix: 'ecommerce_orders',
    route_prefix: `ecommerce_orders`,
    route_path: `ecommerce-orders`,

    select_fields: [
        'id',
        'order_id',
        'date',
        'user_id',
        'order_status',
        'delivery_address_details',
        'total',
        'slug',
        'paid_status',
        'created_at',
        'status'
    ],

    sort_by_cols: [
        'id',
        'name',
        'created_at',
        'status'
    ],

    layout_title: prefix + ' Management',
    page_title: `${prefix} Management`,

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,

};

export default setup;
