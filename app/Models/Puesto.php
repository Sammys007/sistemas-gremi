<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Puesto extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'puestos';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'nombre',
        'departamento.nombre',
    ];

    protected $filterable = [
        'id',
        'nombre',
        'departamento.nombre',
    ];

    protected $fillable = [
        'nombre',
        'departamento_id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function departamento()
    {
        return $this->belongsTo(Departamento::class);
    }
}
