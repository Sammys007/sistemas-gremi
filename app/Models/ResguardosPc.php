<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use App\Traits\Tenantable;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use \DateTimeInterface;

class ResguardosPc extends Model implements HasMedia
{
    use HasAdvancedFilter, SoftDeletes, Tenantable, InteractsWithMedia, HasFactory;

    protected $appends = [
        'pdf',
    ];

    public $table = 'resguardos_pcs';

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
        return $this->belongsTo(Equipo::class);
    }

    public function getPdfAttribute()
    {
        return $this->getMedia('resguardos_pc_pdf')->map(function ($item) {
            $media        = $item->toArray();
            $media['url'] = $item->getUrl();

            return $media;
        });
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }
}
