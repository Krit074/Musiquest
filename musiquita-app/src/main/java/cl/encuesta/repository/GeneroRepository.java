package cl.encuesta.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cl.encuesta.entities.GeneroMusical;

@Repository
public interface GeneroRepository extends CrudRepository<GeneroMusical, Long> {
    
}
