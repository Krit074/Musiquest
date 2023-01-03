package cl.encuesta.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

import cl.encuesta.entities.GeneroMusical;
import cl.encuesta.entities.Resultados;
import cl.encuesta.repository.GeneroRepository;
import cl.encuesta.repository.ResultadoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MusiquitaController {

    private final GeneroRepository generoRepository;
    private final ResultadoRepository resultadoRepository;

    Logger logger = Logger.getLogger(MusiquitaController.class.getName());

    public MusiquitaController(GeneroRepository generoRepository, ResultadoRepository resultadoRepository) {
        this.generoRepository = generoRepository;
        this.resultadoRepository = resultadoRepository;
    }

    @GetMapping("/encuesta")
    public List<GeneroMusical> getGeneros(){
        return (List<GeneroMusical>) generoRepository.findAll();
    }

    @GetMapping("/resultados")
    public List<Resultados> getResultados(){
        return (List<Resultados>) resultadoRepository.findAll();
    }

    @PostMapping("/resultados")
    void addResultado(@RequestBody Resultados resultado){
        resultadoRepository.save(resultado);
    }


}
