<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use App\Traits\Tenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class EquiposMovile extends Model
{
    use HasAdvancedFilter, SoftDeletes, Tenantable, HasFactory;

    public $table = 'equipos_moviles';

    protected $appends = [
        'perifericos_label',
    ];

    protected $casts = [
        'estatus' => 'boolean',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'codigo',
        'marca.nombre',
        'modelo',
        'numero_de_serie',
        'imei',
        'perifericos',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'codigo',
        'marca.nombre',
        'modelo',
        'numero_de_serie',
        'imei',
        'perifericos',
        'estatus',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'codigo',
        'marca_id',
        'modelo',
        'numero_de_serie',
        'imei',
        'perifericos',
        'nota',
        'estatus',
        'created_at',
        'updated_at',
        'deleted_at',
        'owner_id',
    ];

    const PERIFERICOS_RADIO = [
        [
            'label' => 'CARGADOR',
            'value' => 'CARGADOR',
        ],
        [
            'label' => 'AUDIFONOS',
            'value' => 'AUDIFONOS',
        ],
        [
            'label' => 'FUNDA',
            'value' => 'FUNDA',
        ],
        [
            'label' => 'CRISTAL TEMPLADO',
            'value' => 'CRISTAL TEMPLADO',
        ],
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function marca()
    {
        return $this->belongsTo(MarcasMovile::class);
    }

    public function getPerifericosLabelAttribute()
    {
        return collect(static::PERIFERICOS_RADIO)->firstWhere('value', $this->perifericos)['label'] ?? '';
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }
}
