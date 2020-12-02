<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Periferico extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'perifericos';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'nombre',
        'marca',
        'modelo',
        'no_de_serie',
    ];

    protected $filterable = [
        'id',
        'nombre',
        'marca',
        'modelo',
        'no_de_serie',
    ];

    protected $fillable = [
        'nombre',
        'marca',
        'modelo',
        'no_de_serie',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
