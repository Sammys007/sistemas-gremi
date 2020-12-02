<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToEquiposTable extends Migration
{
    public function up()
    {
        Schema::table('equipos', function (Blueprint $table) {
            $table->unsignedBigInteger('marca_id');
            $table->foreign('marca_id', 'marca_fk_2687600')->references('id')->on('marcas');
            $table->unsignedBigInteger('procesador_id');
            $table->foreign('procesador_id', 'procesador_fk_2687602')->references('id')->on('procesadores');
            $table->unsignedBigInteger('memoria_ram_id');
            $table->foreign('memoria_ram_id', 'memoria_ram_fk_2687603')->references('id')->on('memorias_rams');
            $table->unsignedBigInteger('disco_duro_id');
            $table->foreign('disco_duro_id', 'disco_duro_fk_2687604')->references('id')->on('discos_duros');
            $table->unsignedBigInteger('owner_id');
            $table->foreign('owner_id', 'owner_fk_2687609')->references('id')->on('users');
        });
    }
}
