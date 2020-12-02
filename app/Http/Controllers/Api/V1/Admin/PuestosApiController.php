<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePuestoRequest;
use App\Http\Requests\UpdatePuestoRequest;
use App\Http\Resources\Admin\PuestoResource;
use App\Models\Departamento;
use App\Models\Puesto;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PuestosApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('puesto_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PuestoResource(Puesto::with(['departamento'])->advancedFilter());
    }

    public function store(StorePuestoRequest $request)
    {
        $puesto = Puesto::create($request->validated());

        return (new PuestoResource($puesto))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Puesto $puesto)
    {
        abort_if(Gate::denies('puesto_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'departamento' => Departamento::get(['id', 'nombre']),
            ],
        ]);
    }

    public function show(Puesto $puesto)
    {
        abort_if(Gate::denies('puesto_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PuestoResource($puesto->load(['departamento']));
    }

    public function update(UpdatePuestoRequest $request, Puesto $puesto)
    {
        $puesto->update($request->validated());

        return (new PuestoResource($puesto))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Puesto $puesto)
    {
        abort_if(Gate::denies('puesto_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new PuestoResource($puesto->load(['departamento'])),
            'meta' => [
                'departamento' => Departamento::get(['id', 'nombre']),
            ],
        ]);
    }

    public function destroy(Puesto $puesto)
    {
        abort_if(Gate::denies('puesto_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $puesto->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
