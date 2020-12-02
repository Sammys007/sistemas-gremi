<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEquiposMovilesTable extends Migration
{
    public function up()
    {
        Schema::create('equipos_moviles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('modelo')->nullable();
            $table->string('perifericos')->nullable();
            $table->string('codigo')->nullable();
            $table->longText('nota')->nullable();
            $table->boolean('estatus')->default(0)->nullable();
            $table->string('numero_de_serie');
            $table->string('imei')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
