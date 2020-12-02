<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use App\Traits\Tenantable;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class ResguardosMovile extends Model
{
    use HasAdvancedFilter, SoftDeletes, Tenantable, HasFactory;

    public $table = 'resguardos_moviles';

    protected $dates = [
        'fecha',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'folio',
        'fecha',
        'responsable_id',
        'equipo_id',
        'nota',
        'created_at',
        'updated_at',
        'deleted_at',
        'owner_id',
    ];

    protected $orderable = [
        'id',
        'folio',
        'fecha',
        'responsable.nombre',
        'equipo.codigo',
        'nota',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'folio',
        'fecha',
        'responsable.nombre',
        'equipo.codigo',
        'nota',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function getFechaAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setFechaAttribute($value)
    {
        $this->attributes['fecha'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function responsable()
    {
        return $this->belongsTo(Responsable::class);
    }

    public function equipo()
    {
        return $this->belongsTo(EquiposMovile::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }
}
