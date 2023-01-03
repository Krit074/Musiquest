package cl.encuesta;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import cl.encuesta.entities.GeneroMusical;
import cl.encuesta.repository.GeneroRepository;

@SpringBootApplication
public class MusiquitaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MusiquitaApplication.class, args);
	}

	@Bean
	CommandLineRunner init(GeneroRepository generoRepository){
		return args -> {
			Stream.of("Rock", "Pop", "Metal", "Jazz", "Clásica", "Electrónica", "Indie", "Country", "Blues", "Reggaeton", "Bachata", "Salsa", "Cumbia").forEach(nombre ->{
				GeneroMusical genero = new GeneroMusical(nombre);
				generoRepository.save(genero);
			});
		};
	}
}
