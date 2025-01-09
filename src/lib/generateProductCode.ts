export type ProductDetails = {
    category: string;
    productName: string;
    color: string;
    rollWidth: number;
    length: number;
    width: number;
    status: string;
};

export function generateProductCode(details: ProductDetails): string {
    const {
        category,
        productName,
        color,
        rollWidth,
        length,
        width,
        status,
    } = details;

    // Extract the first letter of the category
    const categoryCode = category
        .split(" ")
        .map(word => word.charAt(0).toUpperCase())
        .join("");

    // Extract the first letter of each word in the product name
    const productNameCode = productName
        .split(" ")
        .map(word => word.charAt(0))
        .join("");

    // Extract the first letter of the color
    const colorCode = color.charAt(0);

    // Format rollWidth, length, and width
    const formattedRollWidth = rollWidth.toString().padStart(2, "0");
    const formattedLength = length.toString().padStart(3, "0");
    const formattedWidth = width.toString().padStart(3, "0");

    // Concatenate all parts to form the product code
    return `${categoryCode}${productNameCode}${colorCode}${formattedRollWidth}${formattedLength}${formattedWidth}${status}`;
}