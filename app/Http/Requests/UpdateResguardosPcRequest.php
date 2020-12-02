<?php

namespace App\Http\Requests;

use App\Models\ResguardosPc;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateResguardosPcRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('resguardos_pc_edit');
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
                'required',
            ],
            'equipo_id'      => [
                'integer',
                'exists:equipos,id',
                'required',
            ],
            'nota'           => [
                'string',
                'nullable',
            ],
            'pdf'            => [
                'array',
                'nullable',
            ],
            'pdf.*.id'       => [
                'integer',
                'exists:media,id',
            ],
        ];
    }
}
