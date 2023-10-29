package com.adonay.monsters.entity.services;

import java.util.List;

import com.adonay.monsters.entity.models.Monster;

public interface IMonsterService {
	public Monster get(long id);
	public List<Monster> getAll();
	public void post(Monster monster);
	public void put(Monster monster, long id);
	public void delete(long id);

}
