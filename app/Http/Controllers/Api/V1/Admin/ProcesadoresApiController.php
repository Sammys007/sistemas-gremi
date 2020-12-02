<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProcesadoreRequest;
use App\Http\Requests\UpdateProcesadoreRequest;
use App\Http\Resources\Admin\ProcesadoreResource;
use App\Models\Procesadore;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProcesadoresApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('procesadore_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ProcesadoreResource(Procesadore::advancedFilter());
    }

    public function store(StoreProcesadoreRequest $request)
    {
        $procesadore = Procesadore::create($request->validated());

        return (new ProcesadoreResource($procesadore))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Procesadore $procesadore)
    {
        abort_if(Gate::denies('procesadore_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Procesadore $procesadore)
    {
        abort_if(Gate::denies('procesadore_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ProcesadoreResource($procesadore);
    }

    public function update(UpdateProcesadoreRequest $request, Procesadore $procesadore)
    {
        $procesadore->update($request->validated());

        return (new ProcesadoreResource($procesadore))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Procesadore $procesadore)
    {
        abort_if(Gate::denies('procesadore_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ProcesadoreResource($procesadore),
            'meta' => [],
        ]);
    }

    public function destroy(Procesadore $procesadore)
    {
        abort_if(Gate::denies('procesadore_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $procesadore->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
