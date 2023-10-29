package com.adonay.monsters.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adonay.monsters.entity.dao.IHabitatDao;
import com.adonay.monsters.entity.models.Habitat;

@Service
public class HabitatServiceImpl implements IHabitatService{

	@Autowired
	private IHabitatDao habitatDao;
	
	@Override
	public Habitat get(long id) {
		return habitatDao.findById(id).get();
	}

	@Override
	public List<Habitat> getAll() {
		return (List<Habitat>)habitatDao.findAll();
	}

	@Override
	public void post(Habitat habitat) {
		habitatDao.save(habitat);
		
	}

	@Override
	public void put(Habitat habitat, long id) {
		habitatDao.findById(id).ifPresent((x)->{
			habitat.setId(id);
			habitatDao.save(habitat);
		});
	}

	@Override
	public void delete(long id) {
		habitatDao.deleteById(id);		
	}

}
