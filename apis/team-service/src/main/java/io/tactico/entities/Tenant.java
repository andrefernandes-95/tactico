package io.tactico.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Tenant extends PanacheEntity {
    public String name;
    public String domain;

    @OneToMany(mappedBy = "tenant")
    public List<Team> organizations;
}
