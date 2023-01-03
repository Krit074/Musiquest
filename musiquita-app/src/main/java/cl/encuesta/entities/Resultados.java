package cl.encuesta.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Resultados {

    @Id
    private String email;
    private String genero;

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getGenero() {
        return genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }
}
