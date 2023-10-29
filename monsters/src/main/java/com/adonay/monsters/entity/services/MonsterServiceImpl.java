package com.adonay.monsters.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.adonay.monsters.entity.dao.IMonsterDao;
import com.adonay.monsters.entity.models.Monster;

@Service
public class MonsterServiceImpl implements IMonsterService{

	@Autowired
	private IMonsterDao monsterDao;
	
	@Override
	public Monster get(long id) {
		return monsterDao.findById(id).get();
	}

	@Override
	public List<Monster> getAll() {
		return (List<Monster>) monsterDao.findAll();
	}

	@Override
	public void post(Monster monster) {
		monsterDao.save(monster);
	}

	@Override
	public void put(Monster monster, long id) {
		monsterDao.findById(id).ifPresent((x)->{
			monster.setId(id);
			monsterDao.save(monster);
		});
	}

	@Override
	public void delete(@PathVariable(value = "id") long id) {
		monsterDao.deleteById(id);
	}

}
