import { PaginationLink } from './ui';

export  interface PaginatedCategories {
    current_page: number;
    data: Category[];
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
export interface CategoryPageProps {
    categories: PaginatedCategories;
}
export interface Category {
    id: string;
    nama_kategori: string;
    deskripsi: string;
    sku: string;
    jumlah_product: number;
    created_at: string;
    updated_at: string;
}