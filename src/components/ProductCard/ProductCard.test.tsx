import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('product card renders with title', async () => {
    render(
        <ProductCard 
            title='Product test title' 
            onSelect={function (): void {
                throw new Error('Function not implemented.');
            } } 
            id={undefined} imgSrc={''} price={0} />
        );

    const productCard = await screen.findByText('Product test title');

    expect(productCard).toBeInTheDocument();
})