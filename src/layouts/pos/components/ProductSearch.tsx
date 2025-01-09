import React, { useState } from 'react';
import { Button, Input } from '../../../components';
import { Search } from 'lucide-react';

interface ProductSearchProps {
    onSearch: (query: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className='relative w-96'>
            <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
                <Search className='w-5 h-5' />
            </span>
            <Input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for a product..."
                className='w-full pl-8 py-3'
            />
        </div>
    );
};

export default ProductSearch;