import {
    CircleGauge,
    LayoutList,
    TicketPlus,
    BadgeDollarSign,
    UsersRound,
    ArrowUpDown,
} from "lucide-react";

const menus = [
    {
        name: "Dashboard",
        icon: <CircleGauge className="h-[18px] w-[18px]" />,
        route: "/dashboard",
    },
    {
        name: "Products",
        icon: <LayoutList className="h-[18px] w-[18px]" />,
        route: "/products",
        children: [
            {
                name: "All Products",
                icon: <LayoutList className="h-[18px] w-[18px]" />,
                route: "/products",
            },
            {
                name: "Categories",
                icon: <LayoutList className="h-[18px] w-[18px]" />,
                route: "/product-categories",
            },
        ],
    },
    {
        name: "Purchases",
        icon: <TicketPlus className="h-[18px] w-[18px]" />,
        route: "/purchases",
    },
    {
        name: "Sale",
        icon: <BadgeDollarSign className="h-[18px] w-[18px]" />,
        route: "/sale",
    },
    {
        name: "People",
        icon: <UsersRound className="h-[18px] w-[18px]" />,
        route: "/people",
        children: [
            {
                name: "Suppliers",
                icon: <UsersRound className="h-[18px] w-[18px]" />,
                route: "/supplier",
            },
            {
                name: "Customers",
                icon: <UsersRound className="h-[18px] w-[18px]" />,
                route: "/customer",
            },
        ],
    },
    {
        name: "Stocks",
        icon: <ArrowUpDown className="h-[18px] w-[18px]" />,
        route: "/stocks",
    },
];

export default menus;
