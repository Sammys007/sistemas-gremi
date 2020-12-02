<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMemoriasRamRequest;
use App\Http\Requests\UpdateMemoriasRamRequest;
use App\Http\Resources\Admin\MemoriasRamResource;
use App\Models\MemoriasRam;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MemoriasRamsApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('memorias_ram_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new MemoriasRamResource(MemoriasRam::advancedFilter());
    }

    public function store(StoreMemoriasRamRequest $request)
    {
        $memoriasRam = MemoriasRam::create($request->validated());

        return (new MemoriasRamResource($memoriasRam))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(MemoriasRam $memoriasRam)
    {
        abort_if(Gate::denies('memorias_ram_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'tipo'      => MemoriasRam::TIPO_SELECT,
                'capacidad' => MemoriasRam::CAPACIDAD_SELECT,
            ],
        ]);
    }

    public function show(MemoriasRam $memoriasRam)
    {
        abort_if(Gate::denies('memorias_ram_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new MemoriasRamResource($memoriasRam);
    }

    public function update(UpdateMemoriasRamRequest $request, MemoriasRam $memoriasRam)
    {
        $memoriasRam->update($request->validated());

        return (new MemoriasRamResource($memoriasRam))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(MemoriasRam $memoriasRam)
    {
        abort_if(Gate::denies('memorias_ram_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new MemoriasRamResource($memoriasRam),
            'meta' => [
                'tipo'      => MemoriasRam::TIPO_SELECT,
                'capacidad' => MemoriasRam::CAPACIDAD_SELECT,
            ],
        ]);
    }

    public function destroy(MemoriasRam $memoriasRam)
    {
        abort_if(Gate::denies('memorias_ram_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $memoriasRam->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
