<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreResponsableRequest;
use App\Http\Requests\UpdateResponsableRequest;
use App\Http\Resources\Admin\ResponsableResource;
use App\Models\Puesto;
use App\Models\Responsable;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ResponsablesApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('responsable_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ResponsableResource(Responsable::with(['puesto'])->advancedFilter());
    }

    public function store(StoreResponsableRequest $request)
    {
        $responsable = Responsable::create($request->validated());

        return (new ResponsableResource($responsable))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Responsable $responsable)
    {
        abort_if(Gate::denies('responsable_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'puesto' => Puesto::get(['id', 'nombre']),
            ],
        ]);
    }

    public function show(Responsable $responsable)
    {
        abort_if(Gate::denies('responsable_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ResponsableResource($responsable->load(['puesto']));
    }

    public function update(UpdateResponsableRequest $request, Responsable $responsable)
    {
        $responsable->update($request->validated());

        return (new ResponsableResource($responsable))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Responsable $responsable)
    {
        abort_if(Gate::denies('responsable_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ResponsableResource($responsable->load(['puesto'])),
            'meta' => [
                'puesto' => Puesto::get(['id', 'nombre']),
            ],
        ]);
    }

    public function destroy(Responsable $responsable)
    {
        abort_if(Gate::denies('responsable_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $responsable->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
