import React from 'react';
import { Card } from "../ui/card";

interface ProductCardProps {
    name: string
    price: number
    productCode: string
    image?: string
    onClick?: () => void
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    return (
        <Card onClick={props.onClick} className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
                {props.image ? (
                    <img 
                        src={props.image} 
                        alt={props.name} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                    </div>
                )}
                <div className="absolute top-2 right-2 bg-violet-400 px-3 py-1 rounded-full shadow-md">
                    <span className="text-xs font-medium text-white">{props.productCode}</span>
                </div>
            </div>
            
            <div className="p-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {props.name}
                </h3>
                
                <div className="space-y-2">
                    <div className="flex items-center justify-between p-2">
                        <span className="text-sm text-blue-500 font-medium">Price - </span>
                        <span className="font-semibold text-blue-500">
                            Ks {props.price.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ProductCard;