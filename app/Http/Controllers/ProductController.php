<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        $products = Product::with([
            'category',
            'stock',
        ])->paginate(10);

        return Inertia::render('product', [
            'products' => $products,
        ]);

    }
}
