<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {

        $categories = DB::table('categories')
            ->leftJoin('products', 'categories.id', '=', 'products.category_id')
            ->select(
                'categories.id',
                'categories.nama_kategori',
                'categories.deskripsi',
                DB::raw('COUNT(products.id) as jumlah_product')
            )
            ->groupBy(
                'categories.id',
                'categories.nama_kategori',
                'categories.deskripsi'
            )
            ->paginate(15);

        return Inertia::render('category', [
            'categories' => $categories,
        ]);
    }
}
