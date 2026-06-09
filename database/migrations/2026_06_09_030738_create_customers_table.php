<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('kode_customer')->unique();
            $table->string('nama_customer');

            $table->string('email')->nullable()->unique();
            $table->string('telepon', 20)->nullable();

            $table->text('alamat')->nullable();

            $table->string('kota')->nullable();
            $table->string('provinsi')->nullable();

            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
