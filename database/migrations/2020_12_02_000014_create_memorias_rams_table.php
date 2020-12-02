<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemoriasRamsTable extends Migration
{
    public function up()
    {
        Schema::create('memorias_rams', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre')->nullable();
            $table->string('tipo');
            $table->string('capacidad');
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
