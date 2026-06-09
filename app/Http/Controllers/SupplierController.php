<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class SupplierController extends Controller
{
    public function index(): Response
    {
        $suppliers = DB::table('suppliers')->paginate(10);

        return Inertia::render('supplier', [
            'suppliers' => $suppliers,
        ]);
    }
}
