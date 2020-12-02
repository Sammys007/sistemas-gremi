<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEquiposTable extends Migration
{
    public function up()
    {
        Schema::create('equipos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('tipo');
            $table->string('modelo')->nullable();
            $table->string('codigo');
            $table->boolean('estatus')->default(0)->nullable();
            $table->longText('nota')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
