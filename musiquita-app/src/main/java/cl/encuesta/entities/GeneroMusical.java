package cl.encuesta.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class GeneroMusical {

    @Id
    private String nombre;

    @Override
    public String toString() {
        return "GeneroMusical [nombre=" + nombre + "]";
    }

    public GeneroMusical(String nombre) {
        this.nombre = nombre;
    }

    public GeneroMusical(){
        super();
    }

    public String getNombre() {
        return nombre;
    }

    // standard constructors / setters / getters / toString

}
