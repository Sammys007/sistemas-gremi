<?php

namespace App\Http\Requests;

use App\Models\Procesadore;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateProcesadoreRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('procesadore_edit');
    }

    public function rules()
    {
        return [
            'nombre' => [
                'string',
                'min:0',
                'max:150',
                'required',
                'unique:procesadores,nombre,' . request()->route('procesadore')->id,
            ],
        ];
    }
}
