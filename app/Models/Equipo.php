<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use App\Traits\Tenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use \DateTimeInterface;

class Equipo extends Model implements HasMedia
{
    use HasAdvancedFilter, SoftDeletes, Tenantable, InteractsWithMedia, HasFactory;

    public $table = 'equipos';

    protected $casts = [
        'estatus' => 'boolean',
    ];

    protected $appends = [
        'tipo_label',
        'fotos',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    const TIPO_SELECT = [
        [
            'label' => 'ESCRITORIO',
            'value' => 'ESCRITORIO',
        ],
        [
            'label' => 'LAPTOP',
            'value' => 'LAPTOP',
        ],
    ];

    protected $fillable = [
        'codigo',
        'owner_id',
        'tipo',
        'marca_id',
        'modelo',
        'procesador_id',
        'memoria_ram_id',
        'disco_duro_id',
        'estatus',
        'nota',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'codigo',
        'owner.name',
        'tipo',
        'marca.nombre',
        'modelo',
        'procesador.nombre',
        'memoria_ram.tipo',
        'disco_duro.capacidad',
        'estatus',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'codigo',
        'owner.name',
        'tipo',
        'marca.nombre',
        'modelo',
        'procesador.nombre',
        'memoria_ram.tipo',
        'disco_duro.capacidad',
        'periferico.nombre',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $thumbnailWidth  = 50;
        $thumbnailHeight = 50;

        $thumbnailPreviewWidth  = 120;
        $thumbnailPreviewHeight = 120;

        $this->addMediaConversion('thumbnail')
            ->width($thumbnailWidth)
            ->height($thumbnailHeight)
            ->fit('crop', $thumbnailWidth, $thumbnailHeight);
        $this->addMediaConversion('preview_thumbnail')
            ->width($thumbnailPreviewWidth)
            ->height($thumbnailPreviewHeight)
            ->fit('crop', $thumbnailPreviewWidth, $thumbnailPreviewHeight);
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function getTipoLabelAttribute()
    {
        return collect(static::TIPO_SELECT)->firstWhere('value', $this->tipo)['label'] ?? '';
    }

    public function marca()
    {
        return $this->belongsTo(Marca::class);
    }

    public function procesador()
    {
        return $this->belongsTo(Procesadore::class);
    }

    public function memoriaRam()
    {
        return $this->belongsTo(MemoriasRam::class);
    }

    public function discoDuro()
    {
        return $this->belongsTo(DiscosDuro::class);
    }

    public function periferico()
    {
        return $this->belongsToMany(Periferico::class);
    }

    public function getFotosAttribute()
    {
        return $this->getMedia('equipo_fotos')->map(function ($item) {
            $media                      = $item->toArray();
            $media['url']               = $item->getUrl();
            $media['thumbnail']         = $item->getUrl('thumbnail');
            $media['preview_thumbnail'] = $item->getUrl('preview_thumbnail');

            return $media;
        });
    }
}
