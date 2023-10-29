package com.adonay.monsters.entity.services;

import java.util.List;

import com.adonay.monsters.entity.models.Mineral;

public interface IMineralService {
	public Mineral get(long id);
	public List<Mineral> getAll();
	public void post(Mineral mineral);
	public void put(Mineral mineral, long id);
	public void delete(long id);
}
