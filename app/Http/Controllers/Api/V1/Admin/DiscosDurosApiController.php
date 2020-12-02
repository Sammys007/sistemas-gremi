<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDiscosDuroRequest;
use App\Http\Requests\UpdateDiscosDuroRequest;
use App\Http\Resources\Admin\DiscosDuroResource;
use App\Models\DiscosDuro;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DiscosDurosApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('discos_duro_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new DiscosDuroResource(DiscosDuro::advancedFilter());
    }

    public function store(StoreDiscosDuroRequest $request)
    {
        $discosDuro = DiscosDuro::create($request->validated());

        return (new DiscosDuroResource($discosDuro))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(DiscosDuro $discosDuro)
    {
        abort_if(Gate::denies('discos_duro_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'tipo' => DiscosDuro::TIPO_SELECT,
            ],
        ]);
    }

    public function show(DiscosDuro $discosDuro)
    {
        abort_if(Gate::denies('discos_duro_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new DiscosDuroResource($discosDuro);
    }

    public function update(UpdateDiscosDuroRequest $request, DiscosDuro $discosDuro)
    {
        $discosDuro->update($request->validated());

        return (new DiscosDuroResource($discosDuro))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(DiscosDuro $discosDuro)
    {
        abort_if(Gate::denies('discos_duro_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new DiscosDuroResource($discosDuro),
            'meta' => [
                'tipo' => DiscosDuro::TIPO_SELECT,
            ],
        ]);
    }

    public function destroy(DiscosDuro $discosDuro)
    {
        abort_if(Gate::denies('discos_duro_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $discosDuro->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
