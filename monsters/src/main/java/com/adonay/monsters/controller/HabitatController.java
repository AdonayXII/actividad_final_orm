package com.adonay.monsters.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.adonay.monsters.entity.models.Habitat;
import com.adonay.monsters.entity.models.Monster;
import com.adonay.monsters.entity.services.IHabitatService;
import com.adonay.monsters.entity.services.IMonsterService;

@CrossOrigin(origins = "*")
@RestController
public class HabitatController {
	@Autowired
	IHabitatService habitatService;
	
	@GetMapping("/habitats")
	public List<Habitat> getAllMonsters(){
		return habitatService.getAll();
	}
	
	@GetMapping("/habitats/{id}")
	public Habitat getOne(@PathVariable(value="id") long id){
		return habitatService.get(id);
	}
	
	@PostMapping("/habitats")
	public void post(Habitat habitat) {
		habitatService.post(habitat);
	}
	
	@PutMapping("/habitats/{id}")
	public void put(Habitat habitat, @PathVariable(value="id")long id) {
		habitatService.put(habitat, id);
	}
	
	@DeleteMapping("/habitats/{id}")
	public void delete(@PathVariable(value="id") long id) {
		habitatService.delete(id);
	}
	
}
