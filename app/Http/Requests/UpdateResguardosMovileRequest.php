<?php

namespace App\Http\Requests;

use App\Models\ResguardosMovile;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateResguardosMovileRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('resguardos_movile_edit');
    }

    public function rules()
    {
        return [
            'folio'          => [
                'string',
                'nullable',
            ],
            'fecha'          => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'responsable_id' => [
                'integer',
                'exists:responsables,id',
                'nullable',
            ],
            'equipo_id'      => [
                'integer',
                'exists:equipos_moviles,id',
                'required',
            ],
            'nota'           => [
                'string',
                'nullable',
            ],
        ];
    }
}
