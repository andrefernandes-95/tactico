package io.tactico.resources;

import io.tactico.entities.Team;
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

import java.util.List;

@Path("/teams")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TeamResource {

    @GET
    public List<Team> getAll() {
        return Team.listAll();
    }

    @POST
    public Team create(Team Team) {
        Team.persist();
        return Team;
    }

    @GET
    @Path("/{id}")
    public Team get(@PathParam("id") Long id) {
        return Team.findById(id);
    }

    @PUT
    @Path("/{id}")
    public Team update(@PathParam("id") Long id, Team updated) {
        Team existing = Team.findById(id);
        if (existing == null) {
            throw new WebApplicationException("Team not found", 404);
        }
        existing.name = updated.name;
        existing.city = updated.city;
        return existing;
    }

    @DELETE
    @Path("/{id}")
    public void delete(@PathParam("id") Long id) {
        Team.deleteById(id);
    }
}
