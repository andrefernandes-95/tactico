package io.tactico.services;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;

import static org.hamcrest.CoreMatchers.*;

@QuarkusTest
public class TeamResourceTest {

    @Test
    public void testCreateAndGetTeam() {
        // Step 1: Create a Tenant first
        int tenantId = RestAssured.given()
                .header("Content-Type", "application/json")
                .body("{\"name\":\"Tactico\",\"domain\":\"tactico.io\"}")
                .when().post("/tenants")
                .then()
                .statusCode(201)
                .extract()
                .path("id");

        // Step 2: Create a Team for that Tenant
        int teamId = RestAssured.given()
                .header("Content-Type", "application/json")
                .body("{\"name\":\"Team A\",\"city\":\"Lisbon\",\"tenantId\":" + tenantId + "}")
                .when().post("/teams")
                .then()
                .statusCode(201)
                .body("name", equalTo("Team A"))
                .body("tenantId", equalTo(tenantId))
                .extract()
                .path("id");

        // Step 3: Fetch the team and verify
        RestAssured.given()
                .when().get("/teams/" + teamId)
                .then()
                .statusCode(200)
                .body("name", equalTo("Team A"))
                .body("tenantId", equalTo(tenantId));
    }
}
