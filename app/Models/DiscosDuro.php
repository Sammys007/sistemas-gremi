<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class DiscosDuro extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'discos_duros';

    protected $appends = [
        'tipo_label',
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
            'label' => 'HDD',
            'value' => 'HDD',
        ],
        [
            'label' => 'SSD',
            'value' => 'SSD',
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
}
