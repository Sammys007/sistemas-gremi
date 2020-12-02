<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToResponsablesTable extends Migration
{
    public function up()
    {
        Schema::table('responsables', function (Blueprint $table) {
            $table->unsignedBigInteger('puesto_id');
            $table->foreign('puesto_id', 'puesto_fk_2687648')->references('id')->on('puestos');
            $table->unsignedBigInteger('owner_id');
            $table->foreign('owner_id', 'owner_fk_2687652')->references('id')->on('users');
        });
    }
}
