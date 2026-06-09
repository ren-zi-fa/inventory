import { PaginationLink } from './ui';

 export interface Customer {
    id: number;
    kode_customer: string;
    nama_customer: string;
    email: string | null;
    telepon: string;
    kota: string | null;
    is_active: boolean;
    total_orders: number;
}

 export interface PaginatedCustomer {
    current_page: number;
    data: Customer[];
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

export interface CustomerPageProps {
    customers: PaginatedCustomer;
}