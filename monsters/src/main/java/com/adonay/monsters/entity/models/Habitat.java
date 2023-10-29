package com.adonay.monsters.entity.models;

import jakarta.persistence.*;

@Entity
@Table(name="habitats")
public class Habitat {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nombre;

	@ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE})
	@JoinColumn(name  = "monster_id")
	private Monster monstruo;
	
	@OneToOne(cascade = {CascadeType.REFRESH, CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE})
	@JoinColumn(name = "mineral_id")
	private Mineral mineral;

	//--GETTERS AND SETTERS-------------------------------------------------------
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Monster getMonstruo() {
		return monstruo;
	}

	public void setMonstruo(Monster monstruo) {
		this.monstruo = monstruo;
	}

	public Mineral getMineral() {
		return mineral;
	}

	public void setMineral(Mineral mineral) {
		this.mineral = mineral;
	}

	public Habitat(String nombre, Monster monstruo, Mineral mineral) {
		this.nombre = nombre;
		this.monstruo = monstruo;
		this.mineral = mineral;
	}

	public Habitat() {
	}

	@Override
	public String toString() {
		return "Habitat [id=" + id + ", nombre=" + nombre + ", monstruo=" + monstruo + ", mineral=" + mineral + "]";
	}
	
	
}
