<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class CustomerController extends Controller
{
    public function index(): Response
    {
        $customers = DB::table('customers')
            ->leftJoin('orders', 'customers.id', '=', 'orders.customer_id')
            ->select(
                'customers.id',
                'customers.kode_customer',
                'customers.nama_customer',
                'customers.email',
                'customers.telepon',
                'customers.kota',
                'customers.is_active',
                DB::raw('COUNT(orders.id) as total_orders')
            )
            ->groupBy(
                'customers.id',
                'customers.kode_customer',
                'customers.nama_customer',
                'customers.email',
                'customers.telepon',
                'customers.kota',
                'customers.is_active'
            )
            ->paginate(10);

        return Inertia::render('customer', [
            'customers' => $customers,
        ]);

    }
}
