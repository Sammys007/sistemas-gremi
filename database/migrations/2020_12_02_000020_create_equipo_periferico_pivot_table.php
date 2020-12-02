<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEquipoPerifericoPivotTable extends Migration
{
    public function up()
    {
        Schema::create('equipo_periferico', function (Blueprint $table) {
            $table->unsignedBigInteger('equipo_id');
            $table->foreign('equipo_id', 'equipo_id_fk_2687605')->references('id')->on('equipos')->onDelete('cascade');
            $table->unsignedBigInteger('periferico_id');
            $table->foreign('periferico_id', 'periferico_id_fk_2687605')->references('id')->on('perifericos')->onDelete('cascade');
        });
    }
}
