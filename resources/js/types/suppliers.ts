import { PaginationLink } from './ui';

export interface PaginatedSuppliers {
    current_page: number;
    data: Supplier[];
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

export interface SupplierPageProps {
    suppliers: PaginatedSuppliers;
}

export interface Supplier {
    id: number;
    kode_supplier: string;
    nama_supplier: string;
    email: string | null;
    telepon: string;
    alamat: string;
    nama_kontak: string | null;
    kota: string | null;
    provinsi: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}