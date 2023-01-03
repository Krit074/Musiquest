package cl.encuesta.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cl.encuesta.entities.Resultados;

@Repository
public interface ResultadoRepository extends CrudRepository<Resultados, String>{
    
}
