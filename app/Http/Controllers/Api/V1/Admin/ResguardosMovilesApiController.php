<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreResguardosMovileRequest;
use App\Http\Requests\UpdateResguardosMovileRequest;
use App\Http\Resources\Admin\ResguardosMovileResource;
use App\Models\EquiposMovile;
use App\Models\ResguardosMovile;
use App\Models\Responsable;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ResguardosMovilesApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('resguardos_movile_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ResguardosMovileResource(ResguardosMovile::with(['responsable', 'equipo'])->advancedFilter());
    }

    public function store(StoreResguardosMovileRequest $request)
    {
        $resguardosMovile = ResguardosMovile::create($request->validated());

        return (new ResguardosMovileResource($resguardosMovile))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(ResguardosMovile $resguardosMovile)
    {
        abort_if(Gate::denies('resguardos_movile_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'responsable' => Responsable::get(['id', 'nombre']),
                'equipo'      => EquiposMovile::get(['id', 'codigo']),
            ],
        ]);
    }

    public function show(ResguardosMovile $resguardosMovile)
    {
        abort_if(Gate::denies('resguardos_movile_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ResguardosMovileResource($resguardosMovile->load(['responsable', 'equipo']));
    }

    public function update(UpdateResguardosMovileRequest $request, ResguardosMovile $resguardosMovile)
    {
        $resguardosMovile->update($request->validated());

        return (new ResguardosMovileResource($resguardosMovile))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(ResguardosMovile $resguardosMovile)
    {
        abort_if(Gate::denies('resguardos_movile_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ResguardosMovileResource($resguardosMovile->load(['responsable', 'equipo'])),
            'meta' => [
                'responsable' => Responsable::get(['id', 'nombre']),
                'equipo'      => EquiposMovile::get(['id', 'codigo']),
            ],
        ]);
    }

    public function destroy(ResguardosMovile $resguardosMovile)
    {
        abort_if(Gate::denies('resguardos_movile_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $resguardosMovile->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
