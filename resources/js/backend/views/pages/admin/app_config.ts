type app_config_type = {
    api_host: string;
    api_version: string;
    image_host: string;
}

let app_config : app_config_type = {
    api_host: location.origin,
    // api_host: "http://127.0.0.1:8000",
    // api_host: "https://etek.shefat.info",
    // image_host: "http://127.0.0.1:8005",
    image_host: "https://files.etek.com.bd",
    api_version: 'api/v1'
}

export default app_config
