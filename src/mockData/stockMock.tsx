import { Stock } from "../types/stock";

export const stockInMockData: Stock[] = [
    { productName: "Wireless Mouse", stockInDate: new Date("2025-01-01"), stockInQty: 100 },
    { productName: "Keyboard", stockInDate: new Date("2025-01-02"), stockInQty: 50 },
    { productName: "Monitor", stockInDate: new Date("2025-01-03"), stockInQty: 20 },
    { productName: "USB Cable", stockInDate: new Date("2025-01-04"), stockInQty: 200 },
    { productName: "Laptop Stand", stockInDate: new Date("2025-01-05"), stockInQty: 30 },
    { productName: "Headphones", stockInDate: new Date("2025-01-06"), stockInQty: 60 },
    { productName: "External Hard Drive", stockInDate: new Date("2025-01-07"), stockInQty: 40 },
    { productName: "Smartphone Case", stockInDate: new Date("2025-01-08"), stockInQty: 150 },
    { productName: "Tablet", stockInDate: new Date("2025-01-09"), stockInQty: 10 },
    { productName: "Bluetooth Speaker", stockInDate: new Date("2025-01-10"), stockInQty: 25 },
];

export const stockOutMockData: Stock[] = [
    { productName: "Wireless Mouse", stockOutDate: new Date("2025-01-11"), stockOutQty: 20 },
    { productName: "Keyboard", stockOutDate: new Date("2025-01-12"), stockOutQty: 15 },
    { productName: "Monitor", stockOutDate: new Date("2025-01-13"), stockOutQty: 5 },
    { productName: "USB Cable", stockOutDate: new Date("2025-01-14"), stockOutQty: 50 },
    { productName: "Laptop Stand", stockOutDate: new Date("2025-01-15"), stockOutQty: 10 },
    { productName: "Headphones", stockOutDate: new Date("2025-01-16"), stockOutQty: 25 },
    { productName: "External Hard Drive", stockOutDate: new Date("2025-01-17"), stockOutQty: 8 },
    { productName: "Smartphone Case", stockOutDate: new Date("2025-01-18"), stockOutQty: 60 },
    { productName: "Tablet", stockOutDate: new Date("2025-01-19"), stockOutQty: 3 },
    { productName: "Bluetooth Speaker", stockOutDate: new Date("2025-01-20"), stockOutQty: 12 },
];
