<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use App\Traits\Tenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Responsable extends Model
{
    use HasAdvancedFilter, SoftDeletes, Tenantable, HasFactory;

    public $table = 'responsables';

    protected $orderable = [
        'id',
        'nombre',
        'puesto.nombre',
    ];

    protected $filterable = [
        'id',
        'nombre',
        'puesto.nombre',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'nombre',
        'puesto_id',
        'created_at',
        'updated_at',
        'deleted_at',
        'owner_id',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function puesto()
    {
        return $this->belongsTo(Puesto::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }
}
