package io.tactico.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity
public class Team extends PanacheEntity {
    public String name;
    public String city;
    @ManyToOne
    public Tenant tenant;
}
