
import TermsAndCondition from "./TermsAndCondition.vue";
import ReturnPolicy from "./ReturnPolicy.vue";
import ShipingAndDelivery from "./ShipingAndDelivery.vue";
import Layout from "./Layout.vue";



const routes =
{
    path: 'pages',
    component: Layout,
    children: [
        {
            path: 'terms-and-condition',
            name: "TermsAndCondition",
            component: TermsAndCondition,
        },
        {
            path: 'return-policy',
            name: "ReturnPolicy",
            component: ReturnPolicy,
        },
        {
            path: 'shipping-and-delivery',
            name: "ShipingAndDelivery",
            component: ShipingAndDelivery,
        },


    ]
};


export default routes;
