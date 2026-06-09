<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class StockMovementController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('stock');
    }
}
