package com.adonay.monsters.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.adonay.monsters.entity.models.Mineral;
import com.adonay.monsters.entity.models.Monster;
import com.adonay.monsters.entity.services.IMineralService;
import com.adonay.monsters.entity.services.IMonsterService;

@CrossOrigin(origins = "*")
@RestController
public class MineralController {
	@Autowired
	IMineralService mineralService;
	
	@GetMapping("/minerales")
	public List<Mineral> getAllMonsters(){
		return mineralService.getAll();
	}
	
	@GetMapping("/minerales/{id}")
	public Mineral getOne(@PathVariable(value="id") long id){
		return mineralService.get(id);
	}
	
	@PostMapping("/minerales")
	public void post(Mineral mineral) {
		mineralService.post(mineral);
	}
	
	@PutMapping("/minerales/{id}")
	public void put(Mineral mineral, @PathVariable(value="id")long id) {
		mineralService.put(mineral, id);
	}
	
	@DeleteMapping("/minerales/{id}")
	public void delete(@PathVariable(value="id") long id) {
		mineralService.delete(id);
	}
}
