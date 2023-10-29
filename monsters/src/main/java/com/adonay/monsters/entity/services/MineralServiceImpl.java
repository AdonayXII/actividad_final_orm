package com.adonay.monsters.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adonay.monsters.entity.dao.IMineralDao;
import com.adonay.monsters.entity.models.Mineral;

@Service
public class MineralServiceImpl implements IMineralService{

	@Autowired
	private IMineralDao mineralDao;
	
	@Override
	public Mineral get(long id) {
		return mineralDao.findById(id).get();
	}

	@Override
	public List<Mineral> getAll() {
		return (List<Mineral>) mineralDao.findAll();
	}

	@Override
	public void post(Mineral mineral) {
		mineralDao.save(mineral);
	}

	@Override
	public void put(Mineral mineral, long id) {
		mineralDao.findById(id).ifPresent((x)->{
			mineral.setId(id);
			mineralDao.save(mineral);
		});
	}

	@Override
	public void delete(long id) {
		mineralDao.deleteById(id);		
	}

	
}
