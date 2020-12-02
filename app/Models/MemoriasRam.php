<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class MemoriasRam extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'memorias_rams';

    protected $appends = [
        'tipo_label',
        'capacidad_label',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'nombre',
        'tipo',
        'capacidad',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'nombre',
        'tipo',
        'capacidad',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'nombre',
        'tipo',
        'capacidad',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    const TIPO_SELECT = [
        [
            'label' => 'DDR',
            'value' => 'DDR',
        ],
        [
            'label' => 'DDR2',
            'value' => 'DDR2',
        ],
        [
            'label' => 'DDR3',
            'value' => 'DDR3',
        ],
        [
            'label' => 'DDR4',
            'value' => 'DDR4',
        ],
    ];

    const CAPACIDAD_SELECT = [
        [
            'label' => '1GB',
            'value' => '1GB',
        ],
        [
            'label' => '2GB',
            'value' => '2GB',
        ],
        [
            'label' => '4GB',
            'value' => '4GB',
        ],
        [
            'label' => '8GB',
            'value' => '8GB',
        ],
        [
            'label' => '16GB',
            'value' => '16GB',
        ],
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function getTipoLabelAttribute()
    {
        return collect(static::TIPO_SELECT)->firstWhere('value', $this->tipo)['label'] ?? '';
    }

    public function getCapacidadLabelAttribute()
    {
        return collect(static::CAPACIDAD_SELECT)->firstWhere('value', $this->capacidad)['label'] ?? '';
    }
}
