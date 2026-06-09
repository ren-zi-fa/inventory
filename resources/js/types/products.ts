import { Category } from './categories';
import { PaginationLink } from './ui';

export interface Product {
    id: number;
    nama_produk: string;
    sku: string;
    category_id: number;
    harga_beli: string;
    harga_jual: string;
    stock: Stock;
    image: string | null;
    created_at: string;
    updated_at: string;
    category: Category;
}
export interface Stock {
    id: number;
    product_id: number;
    current_stock: number;
    created_at: string;
    updated_at: string;
}

export interface PaginatedProducts {
    current_page: number;
    data: Product[];
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

export interface ProductPageProps {
    products: PaginatedProducts;
}