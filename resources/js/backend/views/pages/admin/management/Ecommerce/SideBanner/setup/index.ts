import app_config from '../../../../app_config';
import setup_type from './setup_type';

const prefix: string = 'Side Banner';

const setup: setup_type = {

    prefix,
    permission: [`admin`, `super_admin`],

    api_host: app_config.api_host,
    api_version: app_config.api_version,
    api_end_point: 'home-side-banners',

    module_name: 'side_banner',
    store_prefix: 'side_banner',
    route_prefix: `side_banner`,
    route_path: `side-banner`,

    select_fields: [
        'id',
        'banner_one',
        'banner_two',
        'banner_three',
        'banner_four',
        'slug',
        'created_at',
        'status',
    ],

    sort_by_cols: [
        'id',
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
