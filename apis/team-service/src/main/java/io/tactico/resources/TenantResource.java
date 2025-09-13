package io.tactico.resources;

import io.tactico.dto.TenantDTO;
import io.tactico.entities.Tenant;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.MediaType;

import java.util.ArrayList;
import java.util.List;

@Path("/tenants")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TenantResource {

    @GET
    public List<Tenant> getAll() {
        return Tenant.listAll();
    }

    @POST
    @Transactional
    public Tenant create(TenantDTO tenantDTO) {
        Tenant tenant = new Tenant();
        tenant.domain = tenantDTO.getDomain();
        tenant.name = tenantDTO.getName();
        tenant.organizations = new ArrayList<>();
        tenant.persist();
        return tenant;
    }

    @GET
    @Path("/{id}")
    public Tenant get(@PathParam("id") Long id) {
        return Tenant.findById(id);
    }

    @PUT
    @Path("/{id}")
    public Tenant update(@PathParam("id") Long id, Tenant updated) {
        Tenant existing = Tenant.findById(id);
        if (existing == null) {
            throw new WebApplicationException("Tenant not found", 404);
        }
        existing.name = updated.name;
        existing.domain = updated.domain;
        return existing;
    }

    @DELETE
    @Path("/{id}")
    public void delete(@PathParam("id") Long id) {
        Tenant.deleteById(id);
    }
}
