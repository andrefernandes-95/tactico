package io.tactico.dto;

public class TenantDTO {
    private String name;
    private String domain;

    // Default constructor (needed for JSON-B / Jackson)
    public TenantDTO() {}

    // Getters & Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }
}
