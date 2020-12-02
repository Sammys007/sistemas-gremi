<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToResguardosPcsTable extends Migration
{
    public function up()
    {
        Schema::table('resguardos_pcs', function (Blueprint $table) {
            $table->unsignedBigInteger('responsable_id');
            $table->foreign('responsable_id', 'responsable_fk_2687688')->references('id')->on('responsables');
            $table->unsignedBigInteger('equipo_id');
            $table->foreign('equipo_id', 'equipo_fk_2687689')->references('id')->on('equipos');
            $table->unsignedBigInteger('owner_id');
            $table->foreign('owner_id', 'owner_fk_2687726')->references('id')->on('users');
        });
    }
}
